
naming(){

var n= document.getItemById("Name").value;
localStorage.setItem("Name","n");
}


class Final {
    constructor(count, totalAmount) {
      this.scoreElement = document.querySelector('.score');
      this.againButton = document.querySelector('#again');
  
      this.render(count, totalAmount);
      this.againButton.addEventListener('click', location.reload.bind(location));
    }
  
    render(count, totalAmount) {
      this.scoreElement.innerHTML = `Hi${n} You answered ${count} out of ${totalAmount} correct!`;
    }
  }
  
  export default Final;