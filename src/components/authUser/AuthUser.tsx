
import { useAppSelector } from '../../lib/hooks/hooks'
import { Outlet } from 'react-router-dom'
import Register from '../../page/Register'

export default function AuthUser() {
    const user = useAppSelector(state=>state.user)
  return user?.name ? <Outlet/> :<Register/>
}
