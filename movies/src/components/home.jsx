import React, { Component } from 'react';
import { NavLink ,Link } from 'react-router-dom';
import About from './about';
import Top10 from './top10';

class Home extends Component {
    
    render() { 
        return (
            <div >
                <section id="hero">
                <div class="hero-container">
                <h1>Movie Website</h1>
                <h2>Scroll karva par navbar transparent thai jai aavu karvu che</h2>
                <a href="#about" class="btn-scroll scrollto" title="Scroll Down"><i class="bx bx-chevron-down"></i></a>
                </div>
            </section>
                <h4 className="offset-1">Hollywood</h4>
                <ul className="offset-1">
                        <li >
                            <Link class="nav-link" to="/top10">Top10</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Must watch before you die</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Some amazing ones</a>
                        </li>
                        
                </ul>
                <p>The origin of aerospace engineering can be traced back to the aviation pioneers around the late 19th to early 20th centuries, although the work of Sir George Cayley dates from the last decade of the 18th to mid-19th century. One of the most important people in the history of aeronautics[7] and a pioneer in aeronautical engineering,[8] Cayley is credited as the first person to separate the forces of lift and drag, which affect any atmospheric flight vehicle.[9]

Early knowledge of aeronautical engineering was largely empirical, with some concepts and skills imported from other branches of engineering.[10] Some key elements, like fluid dynamics, were understood by 18th-century scientists.

In December 1903, the Wright Brothers performed the first sustained, controlled flight of a powered, heavier-than-air aircraft, lasting 12 seconds. The 1910s saw the development of aeronautical engineering through the design of World War I military aircraft.

Between World Wars I and II, great leaps were made in the field, accelerated by the advent of mainstream civil aviation. Notable airplanes of this era include the Curtiss JN 4, the Farman F.60 Goliath, and Fokker Trimotor. Notable military airplanes of this period include the Mitsubishi A6M Zero, the Supermarine Spitfire and the Messerschmitt Bf 109 from Japan, United Kingdom, and Germany respectively. A significant development in aerospace engineering came with the first operational Jet engine-powered airplane, the Messerschmitt Me 262 which entered service in 1944 towards the end of the second World War.

The first definition of aerospace engineering appeared in February 1958,[4] considering the Earth's atmosphere and outer space as a single realm, thereby encompassing both aircraft (aero) and spacecraft (space) under the newly coined term aerospace.

In response to the USSR launching the first satellite, Sputnik, into space on October 4, 1957, U.S. aerospace engineers launched the first American satellite on January 31, 1958. The National Aeronautics and Space Administration was founded in 1958 as a response to the Cold War. In 1969, Apollo 11, the first manned space mission to the moon took place. It saw three astronauts enter orbit around the Moon, with two, Neil Armstrong and Buzz Aldrin, visiting the lunar surface. The third astronaut, Michael Collins, stayed in orbit to rendezvous with Armstrong and Aldrin after their visit.[11]


A Ball Aerospace engineer performs final checks before the spacecraft is shipped to NASA's Kennedy Space Center in Florida for launch processing.
An important innovation came on January 30, 1970, when the Boeing 747 made its first commercial flight from New York to London. This aircraft made history and became known as the "Jumbo Jet" or "Whale"[12] due to its ability to hold up to 480 passengers.[13]

Another significant development in aerospace engineering came in 1976, with the development of the first passenger supersonic aircraft, the Concorde. The development of this aircraft was agreed upon by the French and British on November 29, 1962.[14]

On December 21, 1988, the Antonov An-225 Mriya cargo aircraft commenced its first flight. It holds the records for the world's heaviest aircraft, heaviest airlifted cargo, and longest airlifted cargo, and has the widest wingspan of any aircraft in operational service.[citation needed]

On October 25, 2007, the Airbus A380 made its maiden commercial flight from Singapore to Sydney, Australia. This aircraft was the first passenger plane to surpass the Boeing 747 in terms of passenger capacity, with a maximum of 853. Though development of this aircraft began in 1988 as a competitor to the 747, the A380 made its first test flight in April 2005.[15]

Elements

Wernher von Braun, with the F-1 engines of the Saturn V first stage at the US Space and Rocket Center

Soyuz TMA-14M spacecraft engineered for descent by parachute

A fighter jet engine undergoing testing. The tunnel behind the engine allows noise and exhaust to escape.
See also: List of aerospace engineering topics
Some of the elements of aerospace engineering are:[16][17]

Radar cross-section – the study of vehicle signature apparent to remote sensing by radar.
Fluid mechanics – the study of fluid flow around objects. Specifically aerodynamics concerning the flow of air over bodies such as wings or through objects such as wind tunnels (see also lift and aeronautics).
Astrodynamics – the study of orbital mechanics including prediction of orbital elements when given a select few variables. While few schools in the United States teach this at the undergraduate level, several have graduate programs covering this topic (usually in conjunction with the Physics department of said college or university).
Statics and Dynamics (engineering mechanics) – the study of movement, forces, moments in mechanical systems.
Mathematics – in particular, calculus, differential equations, and linear algebra.
Electrotechnology – the study of electronics within engineering.
Propulsion – the energy to move a vehicle through the air (or in outer space) is provided by internal combustion engines, jet engines and turbomachinery, or rockets (see also propeller and spacecraft propulsion). A more recent addition to this module is electric propulsion and ion propulsion.
Control engineering – the study of mathematical modeling of the dynamic behavior of systems and designing them, usually using feedback signals, so that their dynamic behavior is desirable (stable, without large excursions, with minimum error). This applies to the dynamic behavior of aircraft, spacecraft, propulsion systems, and subsystems that exist on aerospace vehicles.
Aircraft structures – design of the physical configuration of the craft to withstand the forces encountered during flight. Aerospace engineering aims to keep structures lightweight and low-cost while maintaining structural integrity.[18]
Materials science – related to structures, aerospace engineering also studies the materials of which the aerospace structures are to be built. New materials with very specific properties are invented, or existing ones are modified to improve their performance.
Solid mechanics – Closely related to material science is solid mechanics which deals with stress and strain analysis of the components of the vehicle. Nowadays there are several Finite Element programs such as MSC Patran/Nastran which aid engineers in the analytical process.
Aeroelasticity – the interaction of aerodynamic forces and structural flexibility, potentially causing flutter, divergence, etc.
Avionics – the design and programming of computer systems on board an aircraft or spacecraft and the simulation of systems.
Software – the specification, design, development, test, and implementation of computer software for aerospace applications, including flight software, ground control software, test & evaluation software, etc.
Risk and reliability – the study of risk and reliability assessment techniques and the mathematics involved in the quantitative methods.
Noise control – the study of the mechanics of sound transfer.
Aeroacoustics – the study of noise generation via either turbulent fluid motion or aerodynamic forces interacting with surfaces.
Flight testing – designing and executing flight test programs in order to gather and analyze performance and handling qualities data in order to determine if an aircraft meets its design and performance goals and certification requirements.
The basis of most of these elements lies in theoretical physics, such as fluid dynamics for aerodynamics or the equations of motion for flight dynamics. There is also a large empirical component. Historically, this empirical component was derived from testing of scale models and prototypes, either in wind tunnels or in the free atmosphere. More recently, advances in computing have enabled the use of computational fluid dynamics to simulate the behavior of the fluid, reducing time and expense spent on wind-tunnel testing. Those studying hydrodynamics or hydroacoustics often obtain degrees in aerospace engineering.

Additionally, aerospace engineering addresses the integration of all components that constitute an aerospace vehicle (subsystems including power, aerospace bearings, communications, thermal control, life support, etc.) and its life cycle (design, temperature, pressure, radiation, velocity, lifetime).

Degree programs
Main article: List of aerospace engineering schools
Aerospace engineering may be studied at the advanced diploma, bachelor's, master's, and Ph.D. levels in aerospace engineering departments at many universities, and in mechanical engineering departments at others. A few departments offer degrees in space-focused astronautical engineering. Some institutions differentiate between aeronautical and astronautical engineering. Graduate degrees are offered in advanced or specialty areas for the aerospace industry.

A background in chemistry, physics, computer science and mathematics is important for students pursuing an aerospace engineering degree.[19]

In popular culture
The term "rocket scientist" is sometimes used to describe a person of great intelligence since rocket science is seen as a practice requiring great mental ability, especially technically and mathematically. The term is used ironically in the expression "It's not rocket science" to indicate that a task is simple.[20] Strictly speaking, the use of "science" in "rocket science" is a misnomer since science is about understanding the origins, nature, and behavior of the universe; engineering is about using scientific and engineering principles to solve problems and develop new technology.[5][21] However, "science" and "engineering" are often misused as synonyms.[5][21][22]

See also
American Institute of Aeronautics and Astronautics
American Helicopter Society International
Flight test
Glossary of aerospace engineering
Index of aerospace engineering articles
List of aerospace engineering schools
List of aerospace engineers
List of Russian aerospace engineers
Sigma Gamma Tau (aerospace engineering honor society)
Space Power Facility
References
 "Required Education". study.com. Retrieved 2015-06-22.
 "Education, Aerospace Engineers". myfuture.com. Retrieved 2015-06-22.
 Encyclopedia of Aerospace Engineering. John Wiley & Sons, 2010. ISBN 978-0-470-75440-5.
 Stanzione, Kaydon Al (1989). "Engineering". Encyclopædia Britannica. 18 (15 ed.). Chicago. p. 563.</p>

            </div>
          );
    }
}
 
export default Home;