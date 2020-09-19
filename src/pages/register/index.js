import React,{useState} from 'react';
 import { Button, TextInput, View,StyleSheet } from 'react-native';
 import { Formik } from 'formik';

const Register = ()=> {
  const initialState = {
    name : "",
    email : "",
    password :"",
    gender : "",

  }
  const [user,setUser] = useState(initialState)

  const onSubmit = (values)=> {
    console.log(values)
  }


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Formik
     initialValues={user}
     onSubmit={onSubmit}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View>
         <TextInput
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
         />
         <Button onPress={handleSubmit} title="Submit" />
       </View>
     )}
   </Formik>
        </View>
      );
}

export default Register;

const styes = StyleSheet.create({

})