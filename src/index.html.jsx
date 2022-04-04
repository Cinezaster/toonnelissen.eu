import HomeLayout from "./pageLayouts/home.html.jsx"
import Welcome from './welcome.html.mdx'

export default () => {
  return (
    <HomeLayout title="Welcome">
      <Welcome/>
    </HomeLayout>
  )
}