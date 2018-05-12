const H1Formater = (rawString) => {

}

const TextFormater = (rawString) => {

}

const NodeFormater = (rawString) => {

}

const compose = (formaters) => (rawString) => {
  formaters.reduce((total, formater) => {
    const formatedObj = formater(rawString)
  }, {})
}

export default compose([
  H1Formater,
  TextFormater,
  NodeFormater
])

