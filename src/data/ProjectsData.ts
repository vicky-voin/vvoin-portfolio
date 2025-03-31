import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("digital-twin-demo", "Digital Twin Demo (Energy Sector)", "img/projects/digital_twin_demo.png", 
    `
    <div class="paragraph">
     <strong>Digital Twin Demo (Energy Sector)</strong> is a demo project built to showcase Digital Twin capabilities applied to the Oil and Gas field.
    </div>

    <div class="paragraph">
        How I contributed:
        <ul>
        <li>Created a navigation system to allow to switch between different camera levels</li>
        <li>Implemented UI based on Figma designes using USS and UXML</li>
        <li>Added touch controls for the camera system</li>
        <li>Helped resolve iOS and WebGL specific issues</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        <strong>Technologies:</strong> USS/UXML, Unity, C#, iOS, WebGL, Cinemachine
    </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/digital_twin_demo.png" alt="Digital Twin Screenshot" />
    </div>
    `, "#5a78af", false, true),
    new ProjectData("digital-twin-city", "Digital Twin (City)", "img/projects/digital_city.png", `
    <div class="paragraph">
        <strong>Digital Twin (City)</strong> is a 3D visualization project for Orlando region.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://news.orlando.org/wp-content/uploads/2022/10/30sec-Digital-Twin-Sizzle-1920x1080-6ed2d21.mp4" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        How I contributed:
        <ul>
        <li>Profiled and optimized the application to improve performance for the Surface tablet</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        <strong>Technologies:</strong> Unity, C#
    </div>
    `, "#5a78af"),
    new ProjectData("architecture-twin", "Digital Twin (Architectural)", "img/projects/architecture_twin_demo.png", `
    <div class="paragraph">
        <strong>Digital Twin (Architectural)</strong> is a 3D visualization project made to serve as a training tool for showcasing the house building process.
    </div>

    <div class="paragraph">
        How I contributed:
        <ul>
        <li>Worked on creating the UI and the logic behind the Quiz feature</li>
        <li>Bug fixing</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        <strong>Technologies:</strong> Unity, C#, WebGL, USS/UXML
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/architecture_twin_demo.png" alt="Digital Twin Screenshot" />
    </div>
    `, "#5a78af"),
    new ProjectData("weather-ar", "Weather App AR Mode", "img/projects/weather_app.png", `
    <div class="paragraph">
        <strong>Weather App AR Mode</strong> is a 3D app with an Augmented Reality mode to display relevant weather data.
    </div>

    <div class="paragraph">
        How I contributed:
        <ul>
        <li>Worked on a feature requiring positioning 3D objects on a ground plane within user's view</li>
        <li>Bug fixing</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        <strong>Technologies:</strong> Unity, C#, iOS, AR, UGUI
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/weather_app.png" alt="Weather App Screenshot" />
    </div>
    `, "#5a78af",true, false),
    new ProjectData("madden21", "Madden 21", "img/projects/madden21.png", `
    <div class="paragraph">
        <strong>Madden 21</strong> is a sports game developed for multiple platforms.
    </div>

    <div class="paragraph">
        How I contributed:
        <ul>
        <li>Debugging online multiplayer issues (errors, desyncs)</li>
        <li>Collaborating with a large development team and multiple domain experts</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        <strong>Technologies: C++, PS4, Xbox One</strong> 
    </div>
    `, "#5a78af"),
    new ProjectData("mathstorytime", "Math Storytime App", "img/projects/mathstorytime-1.png", `
    <div class="paragraph">
        <strong>Math Storytime App</strong> is a 2D application that contains multiple animated stories about math concepts.
    </div>

    <div class="paragraph">
        How I contributed:
        <ul>
        <li>Implemented a feature allowing to record user's voice and use it as a custom voice over for the stories</li>
        <li>Put together the visuals and the animations provided by various artists</li>
        <li>Worked on the playback controls UI</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        <strong>Technologies:</strong> Unity, C#, iOS, Android, UGUI
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/mathstorytime-1.png" alt="Math Storytime App Screenshot" />
        <img class="pc-screenshot" src="img/projects/mathstorytime-2.png" alt="Math Storytime App Screenshot" />
    </div>
    `, "#5a78af"),
    new ProjectData("chaudiere", "Chaudière Falls AR App", "img/projects/chaudiere_falls-1.png", `
    <div class="paragraph">
        <strong>Chaudière Falls AR App</strong> is an AR application created for Hydro Ottawa.
    </div>

    <div class="paragraph">
        How I contributed:
        <ul>
        <li>Worked on the UI for the map and information views</li>
        <li>Implemented an image gallery with assets dynamically loaded from a backend server</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        <strong>Technologies:</strong> Unity, C#, iOS, Android, AR, UGUI, Web Requests
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/chaudiere_falls-1.png" alt="Chaudière Falls Screenshot" />
        <img class="phone-screenshot" src="img/projects/chaudiere_falls-2.png" alt="Chaudière Falls Screenshot" />
    </div>
    `, "#5a78af", true),
    new ProjectData("card-games", "Solitaire Games Suite", "img/projects/card-games-preview.webp", `
    <div class="paragraph">
        <strong>Solitaire Games Suite</strong> is a collection of card games (Solitaire, Freecell, Spider) originally created in Objective-C and later ported to Unity.
    </div>

    <div class="paragraph">
        How I contributed:
        <ul>
        <li>Recreated all three games using Unity engine for iOS and Android</li>
        <li>Integrated various Ad frameworks</li>
        <li>Implemented the Daily Challenge feature from scratch</li>
        <li>Optimized the performance for older iOS devices</li>
        <li>Published the games to the app stores</li>
        <li>Fixed small issues in legacy Objective-C code</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        <strong>Technologies:</strong> Unity, C#, iOS, Android, UGUI, Objective-C
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/card-games-1.png" alt="Solitaire Games Suite Screenshot" />
        <img class="phone-screenshot" src="img/projects/card-games-2.jpg" alt="Solitaire Games Suite Screenshot" />
        <img class="phone-screenshot" src="img/projects/card-games-3.jpg" alt="Solitaire Games Suite Screenshot" />
    </div>
    `, "#5a78af", true),
    new ProjectData("sausage-cat", "Sausage Cat Game Demo", "img/projects/sausage-cat-1.png", `
    <div class="paragraph">
        <strong>Sausage Cat Game</strong> is a personal project for mobile platforms that is in its completed demo stage. It features a dozen levels where you have to collect flying coins by launching a cat towards them.
    </div>

    <div class="paragraph">
        Features:
        <ul>
        <li>Physics-based character that loses a segment upon colliding with a wall</li>
        <li>Multiple level features: arrows changing direction, healing items and buttons</li>
        <li>Built for mobile platforms and works with touch input</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        <strong>Technologies:</strong> Unity, C#, UGUI, 2D Physics
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/sausage-cat-1.png" alt="Sausage Cat Game Screenshot" />
        <img class="phone-screenshot" src="img/projects/sausage-cat-2.png" alt="Sausage Cat Game Screenshot" />
        <img class="phone-screenshot" src="img/projects/sausage-cat-3.png" alt="Sausage Cat Game Screenshot" />
        <img class="phone-screenshot" src="img/projects/sausage-cat-4.png" alt="Sausage Cat Game Screenshot" />
    </div>
    `, "#5a78af",true),
    new ProjectData("school-sim", "School Sim Game Prototype", "img/projects/school-sim-1.png", `
    <div class="paragraph">
        <strong>School Sim Game</strong> is a personal project I have been working on that is currently in its early prototype stage. It is meant to be a management style game about maintaining students' happiness levels.
    </div>

    <div class="paragraph">
        Features:
        <ul>
        <li>Random character generation for each student, including both appearance and personality traits</li>
        <li>Each student is generated with friends and foes (green and red lines in one of the screenshots) </li>
        <li>Various effects can be applied to students to change their happiness level (i.e. a rumor will diminish one's happiness level)</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        <strong>Technologies:</strong> Unity, C#, UGUI
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/school-sim-1.png" alt="School Sim Game Screenshot" />
        <img class="pc-screenshot" src="img/projects/school-sim-2.png" alt="School Sim Game Screenshot" />
        <img class="pc-screenshot" src="img/projects/school-sim-3.png" alt="School Sim Game Screenshot" />
        <img class="pc-screenshot" src="img/projects/school-sim-4.png" alt="School Sim Game Screenshot" />
    </div>
    `, "#5a78af",false, true)
];