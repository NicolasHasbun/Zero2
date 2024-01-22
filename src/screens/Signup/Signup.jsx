import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import styles from "../Signup/Signup.styles"
import { useState } from 'react'
import { useSignUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'
import { insertSession } from '../../db'

const Signup = ({navigation}) => {
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [confirmPass, setConfirmPass]= useState("")
  const [triggerSignup] = useSignUpMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    console.log(email, password, confirmPass)
    triggerSignup({
      email,
      password
    })
      .unwrap()
      .then(result => {
          console.log(result)
          dispatch(setUser(result))
          insertSession({
            localId: result.localId,
            email: result.email,
            token: result.idToken,
          })
        })
      .catch(err => console.log(err))
    }

  return (
    <View style={styles.container}>
        <View style={styles.signupContainer}>
            <Text style={styles.title}>Crear una cuenta</Text>
            <TextInput style={styles.inputSignup} placeholder="Ingrese el correo electrónico" value= {email}onChangeText={setEmail}/>
            <TextInput style={styles.inputSignup} placeholder="Ingrese la contraseña"value= {password}onChangeText={setPassword}/>
            <TextInput style={styles.inputSignup} placeholder="Ingrese la contraseña nuevamente"value= {confirmPass}onChangeText={setConfirmPass}/>
            <Pressable style={styles.signupButton} onPress={onSubmit}>
                <Text style={styles.buttonText}>Registrarme</Text>
            </Pressable>
            <Text style={styles.title}>¿Ya tienes cuenta? </Text>
            <Pressable style={styles.signupButton}
            onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.buttonText}>Acceder</Text>
            </Pressable>
           
            
        </View>
    </View>
  )
}

export default Signup