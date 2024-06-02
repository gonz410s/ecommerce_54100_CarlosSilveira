function generateOrderId() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
  
    const getRandomChar = (chars) => chars.charAt(Math.floor(Math.random() * chars.length));
    
    const orderId = Array.from({ length: 2 }, () => getRandomChar(letters)).join('') +
                    Array.from({ length: 4 }, () => getRandomChar(numbers)).join('');
    
    return orderId;
  }
  
export default generateOrderId