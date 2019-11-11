class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :name
      t.references :category, null: false, foreign_key: true
      t.text :description
      t.text :basic_rules
      t.string :image_link
      t.integer :min_player
      t.integer :max_player, null:true

      t.timestamps
    end
  end
end
