export default function Academics() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary-600">Academics at MCHS</h1>

      <section className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2 text-secondary-600">
          Our Curriculum
        </h2>
        <p className="text-gray-700 mb-5">
          At MCHS, we offer a comprehensive curriculum designed to challenge and
          inspire students. Our programs cover a wide range of subjects,
          ensuring a well-rounded education for all our students.
        </p>
        <div>
          <div className="text-gray-700 mb-5">
            <p>Moslem Comprehensive High School follows the Senior Secondary School
            curriculum, offering three distinct fields of study:</p>
          
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Science</li>
              <li>Humanities</li>
              <li>Business</li>
            </ul>
          </div>
          <p className="text-gray-700 mb-5">
            Students take a combination of the following:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Compulsory Core Subjects: English Language, Mathematics, Civic
              Education, and a trade/entrepreneurship subject.
            </li>
            <li>
              Core Subjects in Specialized Fields:
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Humanities: Nigerian Languages (Yoruba), Literature in
                  English, Government, Geography, Christian Religious Studies,
                  Islamic Religious Studies, History, Economics, and Visual
                  Arts.
                </li>
                <li>
                  Science: Biology, Chemistry, Physics, Agriculture, Food and
                  Nutrition, Economics, and Geography.
                </li>
                <li>
                  Business Studies: Accounting, Insurance, Commerce, Economics,
                  and Geography.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-gradient-to-r from-secondary-50 to-primary-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2 text-primary-600">
          Departments
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li className="text-primary-600">Mathematics and Computer Science</li>
          <li className="text-secondary-600">Natural Sciences</li>
          <li className="text-primary-600">Humanities and Social Sciences</li>
          <li className="text-secondary-600">Languages and Literature</li>
          <li className="text-primary-600">Arts and Music</li>
          <li className="text-secondary-600">Physical Education and Health</li>
        </ul>
      </section>

      <section className="bg-gradient-to-r from-primary-100 to-secondary-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2 text-secondary-600">
          Special Programs
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Advanced Placement (AP) Courses</li>
          <li>STEM Innovation Program</li>
          <li>International Exchange Program</li>
          <li>Performing Arts Academy</li>
        </ul>
      </section>
    </div>
  );
}
