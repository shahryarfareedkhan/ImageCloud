const   emailRule =  [
    value => !!value || 'This field is required.',
    value => (value || '').length <= 40 || 'xyz@gmail.com',
    value => {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return pattern.test(value) || 'Invalid e-mail.'
    }, 
  ]
  const   UsernameRule =  [
    value => !!value || 'This field is required.',
    value => (value || '').length <= 20 || 'Max 20 characters',
    value => {
      const pattern = /^(([A-Za-z  ]{3,20}))$/
      return pattern.test(value) || 'Invalid Name'
    },
  ]
  const   firstnameRule =  [
    value => !!value || 'This field is required.',
    value => (value || '').length <= 20 || 'Max 20 characters',
    value => {
      const pattern = /^(([A-Za-z]{3,20}))$/
      return pattern.test(value) || 'Invalid First Name'
    },
  ]
  const   lastnameRule =  [
    value => !!value || 'This field is required.',
    value => (value || '').length <= 20 || 'Max 20 characters',
    value => {
      const pattern = /^(([A-Za-z]{3,20}))$/
      return pattern.test(value) || 'Invalid Last Name'
    },
  ]
  const   passwordRule =  [
    value => !!value || 'Password is required',
    value => (value && value.length >= 8) || 'Password must be 8  characters or more!',
  ]
  const   numberRule =  [
    value => !!value || 'This field is required.',
    value => (value || '').length <= 11 || 'Max 11 numbers',
    value => {
      const pattern = /^(([0-9]{2}))$/
      return pattern.test(value) || 'Invalid Age'
    },
  ]  
  const   imageRule =  [

    value => !!value || 'This field is required.',

  ]
  export {
    UsernameRule,
    emailRule,
    firstnameRule,
    lastnameRule,
    passwordRule,
    numberRule,
    imageRule,
  }