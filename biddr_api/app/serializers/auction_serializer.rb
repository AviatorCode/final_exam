class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :end_at_date, :current_price, :user_id

  belongs_to :user, key: :author #this brings in the associated user
  has_many :bids #this brings in the associated bid(s)
end
