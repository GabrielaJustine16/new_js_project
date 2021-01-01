class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :review, :rating
  belongs_to :user
end
