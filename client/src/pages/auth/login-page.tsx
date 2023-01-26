import { useSetAtom } from 'jotai';
import { Link } from 'react-router-dom';
import { jwtAtom } from '../../providers/auth';

export function LoginPage() {
  const setJwt = useSetAtom(jwtAtom);

  return (
    <div className="border-2 rounded border-slate-300 px-5 py-3">
      <p>Login page</p>
      <button type="button" onClick={() => setJwt('some_jwt')}>
        login
      </button>
      <div />
      <Link to="register">signup instead</Link>
    </div>
  );
}
