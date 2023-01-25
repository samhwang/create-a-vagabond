import { useSetAtom } from 'jotai'
import { Link } from 'react-router-dom'
import { jwtAtom } from '../providers/auth'

export const RegisterPage = () => {
  const setJwt = useSetAtom(jwtAtom)

  return (
    <div className='border-2 rounded border-slate-300 px-5 py-3'>
      <p>Register page</p>
      <button onClick={() => setJwt('some_jwt')}>
        register
      </button>
      <div />
      <Link to='/auth'>
        login instead
      </Link>
    </div>
  )
}