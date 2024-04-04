import React from "react";
const td = "border border-gray-900 px-4 py-2 text-center";

const criteriaData = [
  {
    title: "A. OUTPUTS 20%",
    description: (
      <div className="text-center">
        <h1 className="font-bold underline mb-3">
          Quality and quantity of work accomplished
        </h1>
        <div className="mb-3">
          <h1 className="font-bold">
            1. Quality of work Speed, neatness, accuracy and dependability of
            results regardless of volume."
          </h1>
          <h1>- Barely commits error. Work is fast, thorough and accurate.</h1>
        </div>
        <div className="mb-3">
          <h1 className="font-bold">
            2. Quantity of work Volume of work produced under normal conditions
          </h1>
          <h1>- Finished work well ahead of time.</h1>
        </div>
      </div>
    ),
  },
  {
    title: "B. KNOWLEDGE 20%",
    description: (
      <div className="text-center">
        <h1 className="font-bold underline mb-3">
          The extent to which the employee knows and understands the details and
          nature of his assigned job and related duties.
        </h1>
        <div className="mb-3">
          <h1 className="font-bold">
            1. Job Body of knowledge the employee should have in all aspects of
            his work, work environment (corp., social, professional)
          </h1>
          <h1>- Has good working knowledge and endeavors to acquire more.</h1>
        </div>
        <div className="mb-3">
          <h1 className="font-bold">
            2. Related Duties Body of knowledge the employee possesses which
            could be useful in his job but not directly related.
          </h1>
          <h1>- Occasionally shows some interest in related jobs.</h1>
        </div>
      </div>
    ),
  },
  {
    title: "C. SKILLS 30%",
    description: (
      <div className="text-center">
        <h1 className="font-bold underline mb-3">
          The extent to which the employee possesses and utilizes skills
          directly needed to accomplish his job effectively and efficiently.
        </h1>
        <div className="mb-3">
          <h1 className="font-bold">
            1. Technical Capability within his field of specialization which the
            employee brings to bear in his work.
          </h1>
          <h1>- Adequate technical skills; sometimes require support.</h1>
        </div>
        <div className="mb-3">
          <h1 className="font-bold">
            2. Communication Clear expression of ideas both orally and in
            writing. Also good in grammatical expression/form to inform and
            persuade others while doing task.
          </h1>
          <h1>
            - Expresses ideas and opinions very well both orally and in writing.
          </h1>
        </div>
        <div className="mb-3">
          <h1 className="font-bold">
            3. Resource Utilization Optimal use of raw materials, supplies,
            equipment, tools and company time.
          </h1>
          <h1>
            - Occasionally optimizes the use of Company resources; with some
            organization and system applied in work.
          </h1>
        </div>
      </div>
    ),
  },
  {
    title: "D. ATTITUDES 30%",
    description: (
      <div className="text-center">
        <h1 className="font-bold underline mb-3">
          The characteristics and attitudes that each employee possesses to
          perform each task.
        </h1>
        <div className="mb-3">
          <h1 className="font-bold">
            1. Initiative/ Industriousness Ability to assume responsibility &
            get good results in an aggressive & self-confident manner. Able to
            set high work standards & pursue them despite pressures.
          </h1>
          <h1>
            - Originates new ideas and methods and takes initial action
            promptly; Generally able to work sufficiently in the face of
            moderate pressures.
          </h1>
        </div>
        <div className="mb-3">
          <h1 className="font-bold">
            2. Integrity Ability to maintain social, ethical, and organizational
            norms in job-related activities. Sincere and honest in dealing with
            others. Ability to keep confidential information/matters.
          </h1>
          <h1>
            - Able to maintain social, ethical and organizational norms. Honest
            and sincere in everyday dealings. Generally reliable in handling
            confidential information/matters.
          </h1>
        </div>
        <div className="mb-3">
          <h1 className="font-bold">
            3. Safety/ Orderliness/ Decorum Ability to maintain safety, order,
            and cleanliness in work area; conscious effort to maintain good
            grooming and proper personal decorum.
          </h1>
          <h1>- Usually follows safety standards, rules and regulations.</h1>
        </div>
        <div className="mb-3">
          <h1 className="font-bold">
            4. Dependability / Attendance Executes assignments and completes
            them without need of follow-up; Regularity in attendance-related.
          </h1>
          <h1>
            - Seldom dependable; Sometimes unreliable; Seldom present and
            frequently does not observe working hours.
          </h1>
        </div>
        <div className="mb-3">
          <h1 className="font-bold">
            5. Loyalty/ Corporate Image & Values Extent the employee promotes
            the Company's positive Corporate image and values; takes time to
            know, defend, and support company's policies; fosters harmony and
            goodwill.
          </h1>
          <h1>
            - Frequently defends/supports Company policies and promotes positive
            corporate image.
          </h1>
        </div>
      </div>
    ),
  },
  {
    title: "PERFORMANCE POINT RATING",
    description: (
      <div className="mx-auto flex justify-center">
        <table className={`${td} bg-blue-200 w-1/2`}>
          <tr>
            <td className={`${td}`}>5</td>
            <td className={`${td}`}>Exceptional Performance</td>
            <td className={`${td}`}>95-100</td>
          </tr>
          <tr>
            <td className={`${td}`}>4</td>
            <td className={`${td}`}>Above Standard Performance</td>
            <td className={`${td}`}>85-94</td>
          </tr>
          <tr>
            <td className={`${td}`}>3</td>
            <td className={`${td}`}>Standard Performance</td>
            <td className={`${td}`}>75-84</td>
          </tr>
          <tr>
            <td className={`${td}`}>2</td>
            <td className={`${td}`}>Below Standard Performance</td>
            <td className={`${td}`}>65-74</td>
          </tr>
          <tr>
            <td className={`${td}`}>1</td>
            <td className={`${td}`}>Unacceptable performance</td>
            <td className={`${td}`}>below 65</td>
          </tr>
        </table>
      </div>
    ),
  },
];

export default criteriaData;
