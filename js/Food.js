class Food{
    constructor(){
        
        this.input = createInput("Pet Name")
this.image = loadImage("Milk.png");
this.lastFed
this.foodStock = 0
    }
    updateFoodStock(foodStock){
this.foodStock = foodStock
    }
  
    getFedTime(lastFed){
this.lastFed = lastFed
    }
    deductFood(){
if(this.foodStock>0){
    this.foodStock = this.foodStock-1
}
    }
    getFoodStock(){
        return this.foodStock
            }
            bedroom(){
                background(bedroomImage,550,500);
            }
            washroom(){
                background(washroomImage,550,500)
            }
            garden(){
                background(gardenImage,550,500)
            }
            
    display(){
        var x = 80
        var y = 100
        this.input.position(1050,400)
       
        
        if(this.foodStock!==0){
            for(var i = 0; i<this.foodStock;i++){
                if(i%10==0){
                    x = x+50
                    y = y+50
                }
                image(this.image,x,y,50,50);
                x=x+30
            }
        }
    }
}
