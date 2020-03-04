# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  user_number     :integer          not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    attr_reader :password
    validates :email, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :username, uniqueness: { scope: :user_number }
    validates :password, length: {minimum: 6, allow_nil: true}

    after_initialize :ensure_session_token, :ensure_user_number
    
    has_many :owned_servers,
    foreign_key: :owner_id


    def self.find_by_creds(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def ensure_user_number
        return if self.user_number 
        self.user_number ||= rand(0000..9999)
        # need to check if other_users have their name
        other_users = User.select(username: self.username);
        # get their user_numbers
        other_nums = other_users.pluck(:user_number)
        # debugger
        if other_users # if they are found keep generating until not
            while other_nums.include?(self.user_number)
                self.user_number = rand(0000..9999)
            end
        end
    end

    def reset_session_token
        self.update(session_token: SecureRandom.urlsafe_base64)
        self.session_token
    end

end
