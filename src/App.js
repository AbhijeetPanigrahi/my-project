import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">TRASHTROVE</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost w-full ">
            <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Schedule
                </a>
              </li>
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Contact
                </a>
              </li>
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Contact
                </a>
              </li>
              <li>
                <a>My Profile</a>
              </li>
            </ul>
          </button>
        </div>
      </div>
      <div className="homepage">
        <div>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/originals/6e/36/c4/6e36c4d62b76ad355fce05cdf9ad318b.png)",
            }}
          >
            <div className="forImage"></div>
            <div className="hero-child">
              <div className="hero-overlay bg-opacity-70"></div>
              <div className="hero-content text-center text-neutral-content">
                <style>
                  @import
                  url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz@6..96&family=Bungee+Spice&family=Cinzel&family=Courgette&family=Delicious+Handrawn&family=Great+Vibes&family=Josefin+Sans:wght@300&family=Montez&family=Overpass+Mono:wght@300&family=Overpass:wght@400;500&family=Playfair+Display+SC&family=Poppins&family=Prompt:wght@100&family=Work+Sans:wght@500&display=swap')
                </style>
                <style>
                  @import
                  url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz@6..96&family=Bungee+Spice&family=Cinzel&family=Courgette&family=Delicious+Handrawn&family=Great+Vibes&family=Josefin+Sans:wght@300&family=Montez&family=Orbitron:wght@400..900&family=Overpass+Mono:wght@300&family=Overpass:wght@400;500&family=Playfair+Display+SC&family=Poppins&family=Prompt:wght@100&family=Work+Sans:wght@500&display=swap')
                </style>
                <div className="max-w-md">
                  <h1
                    className="mb-5 text-8xl  custom-heading"
                    style={{
                      marginLeft: "-500px",
                      fontFamily: "Orbitron",
                      fontSize: "48px",
                      color: "white",
                    }}
                  >
                    Welcome To
                  </h1>
                  <h1
                    className="mb-5 text-8xl  custom-heading1"
                    style={{
                      marginLeft: "-200px",
                      fontFamily: "Orbitron",
                      fontSize: "100px",
                      color: "white",
                    }}
                  >
                    WASTEWARDS
                  </h1>
                  <p
                    className="mb-5"
                    style={{
                      marginLeft: "-225px",
                      fontFamily: "Orbitron",
                      fontSize: "20px",
                      color: "grey",
                    }}
                  >
                    Transforming waste into rewards and fostering sustainability
                  </p>
                  <button
                    className="btn btn-outline btn-secondary"
                    style={{
                      width: "180px", // Change the width as needed
                      fontSize: "20px", // Change the font size as needed
                      marginLeft: "-600px", // Adjust the right margin as needed
                    }}
                  >
                    Start Survice
                  </button>
                </div>
              </div>
            </div>
            <div
              className="artboard phone-3"
              style={{
                width: "400px",
                height: "500px",
                border: "2px solid white",
              }}
            >
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Position</th>
                      <th>Name</th>
                      <th>Rank</th>
                      <th>Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Desktop Support Technician</td>
                      <td>Purple</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>3</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>4</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>5</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>6</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>7</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>8</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>9</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="AboutPage bg-green-900 text-white py-12 px-6">
        <div
          className="artboard artboard-horizontal phone-5 "
          style={{
            width: "1000px",
            widthRight: "200px",
            height: "500px",
          }}
        >
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="mb-6 ">
            Welcome to WASTEWARDS, where we are dedicated to transforming waste
            management into a dynamic and rewarding experience. Our platform is
            built on the belief that every small action counts towards a cleaner
            and more sustainable planet. We provide users with innovative tools
            and incentives to actively engage in waste management activities,
            making a positive impact on their communities and the environment.
          </p>
          <p className="mb-6">
            At WASTEWARDS, our mission is clear: to empower individuals to take
            ownership of waste disposal and recycling efforts. Through our
            gamified approach, users earn rewards and build streaks for their
            contributions, creating a sense of accomplishment and motivation to
            continue their environmentally conscious actions.
          </p>
          <p className="mb-6">
            Join us in our mission to create a greener future for generations to
            come. Together, let's turn waste management into an opportunity for
            positive change and environmental stewardship.
          </p>
        </div>
      </div>

      <div className="SecondPage">
        <img src="innoway1.png" />
        <div
          className="artboard artboard-horizontal phone-6"
          style={{
            width: "1500px",
            height: "500px",
          }}
        >
          <h1>Innovative Approach to Waste Management</h1>
          <br></br>
          <div style={{ display: "flex" }}>
            <div className="artboard artboard-horizontal phone-1">
              <kbd className="kbd kbd-lg text-2xl">Award & Streak System</kbd>
              <br></br>
              {/* <h2 className="text-4xl">Award & Streak System</h2> <br></br> */}
              <br></br>
              <br></br>
              <p className="text-2xl text-green">
                Our unique award and streak system gamifies waste management,
                rewarding users for their contributions and encouraging
                consistent participation.
              </p>
            </div>
            <div className="artboard artboard-horizontal phone-1">
              <kbd className="kbd kbd-lg text-2xl">Community Engagement</kbd>
              <br></br>
              {/* <h2 className="text-4xl">Award & Streak System</h2> <br></br> */}
              <br></br>
              <br></br>
              <p className="text-2xl text-green">
                Our platform fosters community engagement by providing users
                with opportunities to collaborate, share ideas, and collectively
                work towards a greener future.
              </p>
            </div>
            <div className="artboard artboard-horizontal phone-1">
              <kbd className="kbd kbd-lg text-2xl">
                Impact on Sustainability:
              </kbd>
              <br></br>
              {/* <h2 className="text-4xl">Award & Streak System</h2> <br></br> */}
              <br></br>
              <br></br>
              <p className="text-2xl text-green">
                By actively participating in waste management through WASTEWARD,
                users not only earn rewards but also contribute significantly to
                reducing environmental pollution, conserving resources, and
                promoting sustainable living practices.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ThirdPage">
        <div
          className="artboard artboard-horizontal phone-5"
          style={{
            width: "1500px",
            height: "500px",
          }}
        >
          <h1>Gamification and Incentives</h1>
          <div className="carousel w-full h-150">
            <div id="slide1" className="carousel-item relative w-full h-full">
              <img src="badges.png" className="pr-50px" />
              <h1>Badges</h1>
              <br></br>
              <p>
                Earn badges for your achievements and show off your commitment
                to sustainability.
              </p>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-full">
              <img
                src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-full">
              <img
                src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-full">
              <img
                src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
