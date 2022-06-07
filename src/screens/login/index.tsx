import { useState } from 'react'
import { Button } from '../../components/shared/button'
import { DefaultText } from '../../components/shared/defaultText'
import { Input } from '../../components/shared/input'
import { useAuth } from '../../hooks/useAuth'
import * as S from './styled'

const Login = ({ navigation }: any) => {
  const [user, setUser] = useState<any>({})
  const { auth } = useAuth({ navigation })

  const handleAuth = () => {
    auth(user)
  }

  return (
    <S.Container>
      <DefaultText text="Login" size="26px" />
      <S.WrapperInput>
        <Input placeholder="E-mail" value={user.email} onChangeText={value => setUser({ ...user, email: value })} />
        <Input
          placeholder="Senha"
          value={user.password}
          secureTextEntry
          onChangeText={value => setUser({ ...user, password: value })}
        />
      </S.WrapperInput>
      <Button text="Entrar" width="30%" onPress={handleAuth} />
    </S.Container>
  )
}

export default Login
