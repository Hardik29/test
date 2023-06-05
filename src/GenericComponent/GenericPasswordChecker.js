import React, {useState, useEffect} from 'react';

const GenericPasswordChecker = (props) => {
    const uppercaseRegExp   = /(?=.*?[A-Z])/;
    const lowercaseRegExp   = /(?=.*?[a-z])/;
    const digitsRegExp      = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp   = /.{8,}/;
  
    const [passwordLength, setPasswordLength] = useState(false);
    const [uppercasePassword, setUppercasePassword] = useState(false);
    const [lowercasePassword, setLowercasePassword] = useState(false);
    const [digitsPassword, setDigitsPassword] = useState(false);
    const [specialCharPassword, setSpecialCharPassword] = useState(false);
    const [minLengthPassword, setMinLengthPassword] = useState(false);
  
  
    useEffect(() => {
      var passwordLength =      props.password.length;
      var uppercasePasswordbool =   uppercaseRegExp.test(props.password);
      if(uppercasePasswordbool){
        setUppercasePassword(true)
      }else{
        setUppercasePassword(false)
      }
      var lowercasePasswordbool =   lowercaseRegExp.test(props.password);
      if(lowercasePasswordbool){
        setLowercasePassword(true)
      }else{
        setLowercasePassword(false)
      }
      var digitsPasswordbool =      digitsRegExp.test(props.password);
      if(digitsPasswordbool){
        setDigitsPassword(true)
      }else{
        setDigitsPassword(false)
      }
      var specialCharPasswordbool = specialCharRegExp.test(props.password);
      if(specialCharPasswordbool){
        setSpecialCharPassword(true)
      }else{
        setSpecialCharPassword(false)
      }
      var minLengthPasswordbool =   minLengthRegExp.test(props.password);
      if(minLengthPasswordbool){
        setMinLengthPassword(true)
      }else{
        setMinLengthPassword(false)
      }
  
      
  
    }, [props.password])
  
  
    return(
      <div className=" font-InterRegular text-xs mt-2  xl:grid xl:grid-cols-2 gap-3">
        <p className={`${minLengthPassword ? "text-green-400 duration-200" : "text-white duration-200"}`}>minimum 8 characters</p>
        <p className={`${uppercasePassword ? "text-green-400 duration-200" : "text-white duration-200"}`}>atleast 1 uppercase character</p> 
        <p className={`${lowercasePassword ? "text-green-400 duration-200" : "text-white duration-200"}`}>atleast 1 lowercase character </p> 
        <p className={`${digitsPassword ? "text-green-400 duration-200" : "text-white duration-200"}`}>at least one digit/number </p> 
        <p className={`${specialCharPassword ? "text-green-400 duration-200" : "text-white duration-200"}`}>at least one special character</p> 
      </div>
  
    )
  }

  
export default GenericPasswordChecker;