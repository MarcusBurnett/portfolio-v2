import React from 'react';

export default [
  {
    name: 'Research',
    collapsed: false,
    numberOfSteps: 2,
    steps: [
      {
        name: '1. Kick Off',
        content: (
          <span>
            I like to start each research project with a team kick off,
            including team members from various departments to provide a variety
            of perspectives, to understand;
            <ul>
              <li>The users latent needs</li>
              <li>The business goals</li>
              <li>Market trends</li>
            </ul>
          </span>
        ),
      },
      {
        name: '2. Initial Analysis',
        content: (
          <span>
            Next I analyse any existing research and data previously gathered,
            so that I can;
            <ul>
              <li>Clarify what we do and don&apos;t know</li>
              <li>Understand the scope of the research project</li>
              <li>Identify an initial direction</li>
            </ul>
          </span>
        ),
      },
      {
        name: '3. User Journey Mapping',
        content: (
          <span>
            Next, I plot out the full user journey, including all possibilities
            and interactions, both physical and digital, in order to identify;
            <ul>
              <li>Possible pain points</li>
              <li>Positive interactions</li>
              <li>Potential opportunities</li>
            </ul>
          </span>
        ),
      },
      {
        name: '4. Competitor Analysis',
        content: (
          <span>
            Understanding the strengths weaknesses, strategies and features of
            competitors allows us to;
            <ul>
              <li>Identify areas where we are lacking</li>
              <li>Spot the points where we have a competitive advantage</li>
              <li>
                Assess the balance of addressing weakness vs increasing
                advantage
              </li>
            </ul>
          </span>
        ),
      },
      {
        name: '5. Generative Research',
        content: (
          <span>
            If feasible with regards to budget and time, we would ideally carve
            out time to speak to potential users, to understand;
            <ul>
              <li>
                What aspects are key to a user&apos;s decision making process
              </li>
              <li>What is most likely to attract uses to a certain solution</li>
            </ul>
          </span>
        ),
      },
      {
        name: '6. Evaluative Research',
        content: (
          <span>
            Speaking with existing users is an essential part of the process, so
            that we can;
            <ul>
              <li>View the actual user journey, not just what we assume</li>
              <li>
                Learn first hand about users explicit pain points and latent
                needs
              </li>
            </ul>
          </span>
        ),
      },
      {
        name: '7. Usability Benchmarking',
        content: (
          <span>
            I create a prototype, using either Figma or React, depending on the
            size of the project, and conduct moderated usability testing, in
            order to;
            <ul>
              <li>
                Provide objective metrics for evaluating usability of future
                concepts
              </li>
              <li>Validate points highlighted during user journey analysis</li>
            </ul>
          </span>
        ),
      },
      {
        name: '8. Other Sources of Inspiration',
        content: (
          <span>
            Expanding focus to products outside of our industry can inspire some
            outside-the-box thinking, potentially leading to;
            <ul>
              <li>
                Opportunities missed by our competitors, allowing us to gain a
                competitive advantage
              </li>
              <li>Solutions that may not have been considered previously</li>
            </ul>
          </span>
        ),
      },
      {
        name: '9. Define the problem',
        content: (
          <span>
            Based on the research gathered, we should now have sufficient data
            to clearly and concisely explain the problems we are tying to solve;
            <ul>
              <li>
                Opportunities missed by our competitors, allowing us to gain a
                competitive advantage
              </li>
              <li>Solutions that may not have been considered previously</li>
            </ul>
          </span>
        ),
      },
    ],
  },
  {
    name: 'Design',
    collapsed: false,
    numberOfSteps: 2,
    steps: [
      {
        name: '1. Initial Brainstorming',
        content: (
          <span>
            As a team, we walk through the insights gathered during the research
            project, understand the problem, and turn those problems in to
            potential opportunities. We can then plot these on;
            <ul>
              <li>An impact-difficulty matrix</li>
              <li>A risk-knowledge matrix</li>
            </ul>
          </span>
        ),
      },
      {
        name: '2. Early Concept Creation',
        content: (
          <span>
            Everything we have learnt so far allows me, alongside the team and
            stakeholders, to create a series of early concepts, resulting in;
            <ul>
              <li>3-5 possible solutions</li>
              <li>A better understanding of direction, for all involved</li>
            </ul>
          </span>
        ),
      },
      {
        name: '3. Unmoderated Testing',
        content: (
          <span>
            Each potential solution is put through it&apos;s paces, using a
            detailed Maze test, sent to anonymous testers (the more the better).
            This should highlight;
            <ul>
              <li>A detailed breakdown of each design&apos;s usability</li>
              <li>Strengths and weaknesses of each design</li>
            </ul>
          </span>
        ),
      },
      {
        name: '4. Refinement',
        content: (
          <span>
            Based on unmoderated testing results, we should be able to narrow
            down the number of designs to a maximum of 2, incorporating the best
            pieces of each early concept, which can then be;
            <ul>
              <li>Converted to high-fidelity prototypes</li>
            </ul>
          </span>
        ),
      },
      {
        name: '5. Moderated Testing',
        content: (
          <span>
            With 1 or 2 hi-fi prototypes, we can conduct moderated testing with
            our users that allows us to;
            <ul>
              <li>Compare the results against our benchmark</li>
              <li>Ensure these solutions indeed fix the problems identified</li>
            </ul>
          </span>
        ),
      },
      {
        name: '6. Further Refinement',
        content: (
          <span>
            By this point we can refine once more, using insights gathered
            during testing to create a single solution that is;
            <ul>
              <li>Backed by thorough testing and evidence</li>
              <li>Closely resembles the final version</li>
            </ul>
          </span>
        ),
      },
      {
        name: '7. Internal Testing',
        content: (
          <span>
            Allowing anyone in the company to experience the refined solution
            gives them the opportunity to;
            <ul>
              <li>Provide insights from an alternate perspective</li>
              <li>Provide feedback and make additional suggestions</li>
              <li>Give final sign off on the design</li>
            </ul>
          </span>
        ),
      },
      {
        name: '8. Handover',
        content: (
          <span>
            The finishing touches are applied to the design, and the design file
            is successfully handed over to development, including;
            <ul>
              <li>
                A detailed yet understandable breakdown of all possible user
                journeys
              </li>
              <li>A fully interactive prototype</li>
              <li>Success metrics</li>
            </ul>
          </span>
        ),
      },
    ],
  },
  {
    name: 'Develop',
    collapsed: false,
    numberOfSteps: 2,
    steps: [
      {
        name: '1. Design review',
        content: (
          <span>
            Either I have conducted resarch and/or design myself, in which case
            I fully understand of the final design, or I need some time to fully
            analyse the final handover, so that I can identify;
            <ul>
              <li>Final specifications</li>
              <li>Technical requirements</li>
              <li>Scope of the devlopment project</li>
            </ul>
          </span>
        ),
      },
      {
        name: '2. Preparation',
        content: (
          <span>
            As a team, we should agree upon the approach to the project, which
            includes deciding;
            <ul>
              <li>Architecture</li>
              <li>Tech stack</li>
              <li>Roadmap and responsibilities</li>
            </ul>
          </span>
        ),
      },
      {
        name: '3. Initial Project Structure',
        content: (
          <span>
            Once prepared, we can create the project and build the initial
            structure, including but not limited to;
            <ul>
              <li>File structure</li>
              <li>Environment setup</li>
              <li>Navigation</li>
              <li>State management</li>
            </ul>
          </span>
        ),
      },
      {
        name: '4. Component Creation',
        content: (
          <span>
            By going through the design, I create a list of components, their
            various states and potential properties, and create a component
            library that is;
            <ul>
              <li>Simple and easy to understand</li>
              <li>Flexible</li>
              <li>Fully tested</li>
            </ul>
          </span>
        ),
      },
      {
        name: '5. Import and Minimise Assets',
        content: (
          <span>
            Assets such as images, icons and fonts must be imported, and done
            consistently in order to be used correctly. This must be done while
            accounting for
            <ul>
              <li>Dimension variations</li>
              <li>Themes</li>
              <li>Performance</li>
            </ul>
          </span>
        ),
      },
      {
        name: '6. Building Pages',
        content: (
          <span>
            With all the building blocks in place, we can start to create the
            larger pages/features within the project, including;
            <ul>
              <li>Page structure</li>
              <li>Complex functionality</li>
              <li>Fluid & intuitive user experience, following the designs</li>
            </ul>
          </span>
        ),
      },
      {
        name: '7. Quality Assurance',
        content: (
          <span>
            Each piece of work must be thoroughly reviewed by developers and
            QA&apos;s to ensure quality and consistency. This involves;
            <ul>
              <li>Thorough code reviews</li>
              <li>Pixel perfect comparison with designs</li>
              <li>Ensure all flows are accounted for</li>
              <li>
                A series of testing (e.g. unit testing, integration testing)
              </li>
            </ul>
          </span>
        ),
      },
      {
        name: '8. Deployment',
        content: (
          <span>
            With testing complete, and any necessary refinements made, the
            product is ready for release. This is done in the following phases
            (all of which are monitored);
            <ul>
              <li>Staff only release</li>
              <li>Beta testing</li>
              <li>Staged rollout</li>
            </ul>
          </span>
        ),
      },
    ],
  },
];
