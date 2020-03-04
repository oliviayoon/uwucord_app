# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  is_dm?     :boolean          not null
#  server_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Channel < ApplicationRecord
    validates :name, :is_dm?, :server_id, presence: true
    validates :name, uniqueness: {scope: :server_id}

    belongs_to :server

end
