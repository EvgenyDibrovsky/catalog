import { useState, useEffect } from 'react'
import AppRoutes from 'components/AppRoutes/AppRoutes'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Loading from './Base/Loader'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

export const App = () => {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    // имитация асинхронной загрузки данных
    setTimeout(() => setLoading(false), 500)
  }, [])

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  if (loading) {
    return <Loading />
  }

  return (
    <Provider store={store}>
      <HelmetProvider>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <AppRoutes />
        <Footer />
      </HelmetProvider>
    </Provider>
  )
}
