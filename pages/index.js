import Page from '../layouts/page'

const imgStyle = {
  width: '300px',
  objectFit: 'cover',
}

export default () => (
  <Page>
    <img style={imgStyle} src={process.env.BACKEND_URL + '/static/main.gif'}/>
  </Page>
)