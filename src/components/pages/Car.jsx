import React, { useEffect, useState } from 'react'
import { IoIosTrash, IoIosArrowDropleft } from "react-icons/io"
import { FaMoneyBillWave, FaCreditCard } from "react-icons/fa";
import { Link } from 'react-router-dom'
import '../../styles/pages/cart.sass'

const Car = () => {
  const [cart, setCart] = useState([])
  const [selectedPayment, setSelectedPayment] = useState(null)

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || []
    setCart(storedCart)
  }, [])

  // Função que diminui a quantidade de um item ou o remove se for 1
  const removeFromCart = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        // Se a quantidade for maior que 1, diminui 1 unidade
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 }
        }
        // Se for igual a 1, remove o item do carrinho
        return null
      }
      return item
    }).filter(item => item !== null)

    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const groupedCart = cart.reduce((acc, item) => {
    const existingItem = acc.find(i => i.id === item.id)
    if (existingItem) {
      existingItem.quantity += item.quantity
    } else {
      acc.push(item)
    }
    return acc
  }, [])

  const totalValue = groupedCart.reduce((total, item) => {
    const price = parseFloat(item.price.replace('R$', '').replace(',', '.'))
    return total + (price * item.quantity)
  }, 0)

  const handlePaymentClick = (method) => {
    setSelectedPayment(method)
  }

  return (
    <div className='car-container'>
      <div className='cart'>
        <h3>Meu carrinho</h3>
        <button className='buy'>
          <Link to='/'> <IoIosArrowDropleft className='arrow' />Continuar comprando</Link>
        </button>
        {groupedCart.length > 0 ? (
          <>
            <ul>
              {groupedCart.map((item) => (
                <li key={item.id}>
                  <div className='content-left'>
                    <img src={item.src} alt={item.title} />
                    <p>{item.title} <br /> {item.price} {item.quantity}x</p>
                    <button onClick={() => removeFromCart(item.id)} className='trash'>
                      <IoIosTrash />
                    </button>

                  </div>
                </li>
              ))}
            </ul>

            <div className='total'>
              <strong>Valor total: R${totalValue.toFixed(2).replace('.', ',')}</strong>
              <p className='pay'>Metodos de pagamentos: </p>
              <button onClick={() => handlePaymentClick('creditCard')} className={selectedPayment === 'creditCard' ? 'selected' : ''}>
                <FaCreditCard className='credit_card'/>
              </button>
              <button onClick={() => handlePaymentClick('money')} className={selectedPayment === 'money' ? 'selected' : ''}>
                <FaMoneyBillWave className='money' />
              </button>

              {selectedPayment === 'creditCard' && (
                <select name="card" id="card" className='change'>
                  <option value="">Selecione um cartão</option>
                  <option value="visa">Visa</option>
                  <option value="mastercard">MasterCard</option>
                  <option value="amex">American Express</option>
                  <option value="elo">Elo</option>
                  <option value="hipercard">Hipercard</option>
                </select>
              )}

              {selectedPayment === 'money' && (
                <input type='text' placeholder='Precisa de troco?' className='change' />
              )}
            </div>

            <div className='address'>
              <p>Endereço de entrega:</p>
              <input required placeholder='Digite seu endereço completo...' className='addres' />
              <button className='toSend'>Enviar pedido</button>
            </div>
          </>
        ) : (
          <p className='car-void'>Seu carrinho está vazio</p>
        )}
      </div>
    </div >
  )
}

export default Car;
