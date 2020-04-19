# == Schema Information
#
# Table name: servers
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  invite     :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  private    :boolean          default("false"), not null
#
class Server < ApplicationRecord
    validates :name, :invite, :owner_id, presence: true
    validates :private, inclusion: { in: [true, false] }
    validates :invite, uniqueness: true

    after_initialize :generate_invite, :ensure_image
    after_create :default_channel

    belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

    has_many :channels,
    dependent: :destroy

    has_many :channel_messages,
    through: :channels,
    source: :messages,
    dependent: :destroy

    has_many :memberships,
    foreign_key: :server_id,
    class_name: :ServerUser

    has_many :members,
    through: :memberships,
    source: :user,
    dependent: :destroy

    has_one_attached :profile_pic

    def ensure_image
        unless self.profile_pic.attached?
            file = open('https://uwucord-seed.s3-us-west-1.amazonaws.com/user-profile-pic.png')
            self.profile_pic.attach(io: file, filename: 'user-profile-pic.png')
        end
    end

    def generate_invite
        return if self.invite
        self.invite ||= SecureRandom.urlsafe_base64(4)
        unless (Server.pluck(:invite).count(self.invite) == 1)
            self.invite = SecureRandom.urlsafe_base64(4)
        end
    end

    def default_channel
        Channel.create!(name:"genewal", is_dm?: false, server_id: self.id) unless self.name === "Home"
    end
end
