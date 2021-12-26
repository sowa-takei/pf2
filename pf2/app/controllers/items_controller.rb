class ItemsController < ApplicationController
  def new
    @item =Item.new
  end

  def index
    @items = Item.all
  end

  def create
    @item = Item.new(item_params)
    @item.save
    redirect_to items_path

  end

  private
  def item_params
    params.require(:item).permit(:image)
  end
end
