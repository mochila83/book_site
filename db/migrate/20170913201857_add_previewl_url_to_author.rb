class AddPreviewlUrlToAuthor < ActiveRecord::Migration[5.1]
  def change
    add_column :authors, :preview_url, :string
  end
end
