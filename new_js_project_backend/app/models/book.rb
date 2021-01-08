class Book < ApplicationRecord
  validates :title, presence: true
  validates :author, presence: true
  validates :review, presence: true
  validates :rating, presence: true
  belongs_to :user
end
