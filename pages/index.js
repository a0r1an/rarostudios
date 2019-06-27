function Home() {
  console.log(process.env.SITE_TITLE);
  return <header>
    <div>
      <h1>{process.env.SITE_TITLE}</h1>
    </div>
    <div>
      <ul>
        <li><a href="#">VIDEOS</a></li>
        <li><a href="#">VIDEOS</a></li>
      </ul>
    </div>
  </header>
}

export default Home
