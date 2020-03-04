# == Schema Information
#
# Table name: servers
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  invite     :string           not null
#  owner_id   :integer          not null
#  private    :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Server < ApplicationRecord
    validates :name, :invite, :owner_id, private, presence: true
    validates :private, inclusion: { in: [:true, :false] }

    after_initialize :generate_invite
    # after_create :default_channel

    belongs_to :user,
    foreign_key: :owner_id

    has_many :channels,
    dependent: :destroy


    def generate_invite
        self.invite ||= SecureRandom.url_safe64
    end

    # def default_channel
    #     self.channels.create(name: "general")
    #     #create default 'general channel for each server created'
    # end
end
