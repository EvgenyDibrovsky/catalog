import { BsDoorOpen } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../redux/auth/auth-operations' // Убедитесь, что путь правильный

export default function Logout() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
    // Вызовите действие разлогинивания и дождитесь его завершения
    dispatch(logout()).then(() => {
      // Удалите JWT токен из памяти/хранилища или любых других мест, где он хранится
      // Например, если вы используете localStorage для хранения токена:
      localStorage.removeItem('authToken')

      // Перенаправьте пользователя на главную страницу
      navigate('/')
    })
  }

  return (
    <button onClick={handleLogout}>
      <BsDoorOpen className="w-6 h-6 text-sky-500 cursor-pointer duration-200 hover:text-red-500 hover:scale-110" />
    </button>
  )
}
