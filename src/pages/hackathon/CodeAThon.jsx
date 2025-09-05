import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../../Custom.css';
import CodeAthon from '../../assets/logo/codeAthon.png'
import Button from '../../components/Button'

const CodeAThon = () => {
  const navigate = useNavigate();
  return (
  <div className="h-auto w-full reverseFade">
    <div className='pt-0 mt-0 h-[20rem] flex justify-center'>
      <img src={CodeAthon} />
    </div>
    <div className='flex justify-center'>
      <Button
      onClick={()=>{
        navigate('/register');
      }}
      >Register »</Button>
    </div>
    <section className="p-6 space-y-8 text-gray-300">
      {/* Event Overview */}
      <div>
        <h2 className="text-2xl font-bold mb-2 text-grad">1. Event Overview</h2>
        <p>
          The Mini Hackathon is designed to challenge participants and test
          their technical skills, communication ability, and logical thinking.
          In this hackathon a central problem statement will be provided to all
          teams, and participants must identify sub-problems within it to build
          practical, innovative solutions. Each team will develop a working
          project, focusing on both frontend design and backend functionality,
          ensuring a complete and impactful prototype. The criteria on which the
          projects will be evaluated are given below under the Rules and Judging
          Criteria section.
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <strong>Objective:</strong> To challenge participants to design and
            build a functional web site within a set time frame, while fostering
            teamwork, creativity, and technical skills.
          </li>
          <li>
            <strong>Theme:</strong> These themes will be provided in the Online
            Qualifier Round:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
              <li>
                <strong>Theme 1: Waste Reduction &amp; Sustainability</strong>
                <p>
                  Build digital solutions that encourage sustainable living.
                </p>
                <ul className="list-disc list-inside ml-6">
                  <li>Apps that track grocery items and send expiry alerts</li>
                  <li>
                    Platforms to donate or share leftover food with neighbors
                  </li>
                  <li>
                    Tools that help reduce electricity or water usage at home
                  </li>
                  <li>Gamified solutions that reward eco-friendly habits</li>
                </ul>
              </li>
              <li>
                <strong>Theme 2: Accessible Education &amp; Learning</strong>
                <p>Create solutions that make learning inclusive for everyone.</p>
                <ul className="list-disc list-inside ml-6">
                  <li>Flashcard or quiz apps for quick revision</li>
                  <li>AI or voice-based assistants for doubt-solving</li>
                  <li>Simple language translation tools</li>
                  <li>Knowledge-sharing platforms for students</li>
                </ul>
              </li>
              <li>
                <strong>Theme 3: Digital Inclusion for Everyone</strong>
                <p>
                  Design user-friendly solutions for elders, children, and
                  first-time users.
                </p>
                <ul className="list-disc list-inside ml-6">
                  <li>Simplified bill reminders for elderly users</li>
                  <li>Child-friendly learning apps</li>
                  <li>One-click apps for government services</li>
                  <li>Voice-command helpers for low digital literacy users</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Target Audience:</strong> Students with an interest in web
            development, from beginners to experienced coders.
          </li>
          <li>
            <strong>Team Size:</strong> 2–3 members per team.
          </li>
        </ul>
      </div>

      {/* Logistics & Timeline */}
      <div>
        <h2 className="text-2xl font-bold mb-2 text-grad">2. Logistics &amp; Timeline</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Date &amp; Duration:</strong> 8 hours (10 A.M. to 6 P.M.,
            date TBD)
          </li>
          <li>
            <strong>Venue:</strong> Auditorium 1
          </li>
          <li>
            <strong>Equipment Checklist:</strong>
            <ul className="list-disc list-inside ml-6">
              <li>High-speed Wi-Fi (first 1 hour)</li>
              <li>Tables and chairs</li>
              <li>Extension cords and power strips</li>
              <li>Projector and screen</li>
              <li>Sound system</li>
            </ul>
          </li>
          <li>
            <strong>Planning Timeline:</strong>
            <ul className="list-disc list-inside ml-6">
              <li>2 Months Prior: Marketing, registration, budget</li>
              <li>1 Month Prior: Online Qualifier Round</li>
              <li>1 Week Prior: Final details to participants</li>
              <li>Day Before: Setup check &amp; volunteer briefing</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Rules & Judging Criteria */}
      <div>
        <h2 className="text-2xl font-bold mb-2 text-grad">3. Rules &amp; Judging Criteria</h2>
        <h3 className="text-xl font-semibold">Competition Rules</h3>
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li>Teams must start from scratch</li>
          <li>All members must be present during the event</li>
          <li>Any tech stack allowed</li>
          <li>Implement 2–4 backend functionalities</li>
          <li>No pre-written code, open-source libraries allowed</li>
          <li>No AI usage allowed</li>
          <li>Bring your own laptops &amp; chargers</li>
          <li>No internet except first hour (for dependencies &amp; GitHub push)</li>
          <li>Final presentation + GitHub push + hosting required</li>
          <li>Submit abstract, PPT, repo link &amp; web URL</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Judging Criteria</h3>
        <ul className="list-disc list-inside ml-6">
          <li>
            <strong>UI/UX (50%)</strong> – Visual appeal &amp; usability
          </li>
          <li>
            <strong>Functionality &amp; Technical Complexity (30%)</strong> –
            Features, correctness, coding depth
          </li>
          <li>
            <strong>Innovation (10%)</strong> – Creativity &amp; originality
          </li>
          <li>
            <strong>Presentation (10%)</strong> – Confidence &amp; clarity
          </li>
        </ul>
      </div>

      {/* Budget & Sponsorship */}
      <div>
        <h2 className="text-2xl font-bold mb-2 text-grad">4. Budget &amp; Sponsorship</h2>
        <h3 className="text-xl font-semibold">Income</h3>
        <ul className="list-disc list-inside ml-6">
          <li>Sponsorships (Bronze, Silver, Gold tiers)</li>
          <li>Registration Fee: ₹100 per participant</li>
        </ul>
        <h3 className="text-xl font-semibold mt-3">Expenses</h3>
        <ul className="list-disc list-inside ml-6">
          <li>Prizes: Cash, certificates, medals</li>
          <li>Food &amp; Drinks</li>
          <li>Swag: Participation IDs</li>
          <li>Marketing: Posters, ads</li>
        </ul>
      </div>

      {/* Schedule */}
      <div>
        <h2 className="text-2xl font-bold mb-2 text-grad">5. Day-of-Event Schedule</h2>
        <table className="table-auto border-collapse border border-gray-400 w-full text-left">
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2">9:00 – 9:30 AM</td>
              <td className="border border-gray-400 p-2">
                Registration &amp; Setup
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">9:30 – 10:00 AM</td>
              <td className="border border-gray-400 p-2">
                Opening, briefing &amp; morning refreshment
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">10:00 – 2:00 PM</td>
              <td className="border border-gray-400 p-2">Coding Phase 1</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">2:00 – 2:30 PM</td>
              <td className="border border-gray-400 p-2">Lunch Break</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">2:30 – 5:00 PM</td>
              <td className="border border-gray-400 p-2">Coding Phase 2</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">5:00 – 6:00 PM</td>
              <td className="border border-gray-400 p-2">
                Submission, presentations &amp; judging
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">6:00 – 7:00 PM</td>
              <td className="border border-gray-400 p-2">
                Evening Refreshment
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    </div>
  )
}


export default CodeAThon;