import React,{useState} from 'react';
 import { Button, TextInput, View,StyleSheet,Text } from 'react-native';
 import { Formik } from 'formik';
 import * as Yup from 'yup';
import CustomTextInput from "../../components/CustomTextInput"
import ContainerAuth from "../../components/ContainerAuth"

const Login = ()=> {
  const initialState = {
    email : "",
    password :"",

  }
  const [user,setUser] = useState(initialState)

  const onSubmit = (values)=> {
    console.log(values)
  }


    return (
      <View style={{flex:1,backgroundColor:'black'}}>
      <ContainerAuth />
        <View style={styles.container}>
          <View styles={styles.logo}>
            <Text>Logo</Text>
          </View>
         <Formik
     initialValues={user}
     onSubmit={onSubmit}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View style={styles.formContainer}>
         <CustomTextInput
           handle={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
           placeholder="Email"
         />
         <CustomTextInput
           handle={handleChange('password')}
           onBlur={handleBlur('password')}
           value={values.password}
           placeholder="Password"
           isPassword={true}
         />
         <Button onPress={handleSubmit} title="Submit" />
       </View>
     )}
   </Formik>
  
        </View>
        <View style={styles.footerAuth}>

</View>
        </View>
      );
}

export default Login;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: "center",
    alignSelf:"center",
    justifyContent:"center",
    borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        backgroundColor:"white",
    marginTop:-42,
   
  },
  logo:{
    fontWeight:"bold",
    fontSize:80,
    color:"#fb5b5a",
    marginBottom:40
  },
  formContainer : {marginHorizontal:20},
  footerAuth : {
    backgroundColor:"black",
    height :80,
    
  }
})