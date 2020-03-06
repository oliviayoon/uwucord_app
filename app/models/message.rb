# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  channel_id :integer          not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Message < ApplicationRecord

    belongs_to :author
    belongs_to :channel
end
