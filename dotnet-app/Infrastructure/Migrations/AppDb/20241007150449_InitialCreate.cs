using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Infrastructure.Migrations.AppDb
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "JobPosts",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobPosts", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "JobPosts",
                columns: new[] { "Id", "Created", "Description", "Location", "Title" },
                values: new object[,]
                {
                    { new Guid("00000000-0000-0000-0000-000000000001"), new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "We are seeking a talented Software Engineer with 3+ years of experience in developing scalable web applications. The ideal candidate should have strong proficiency in C# and .NET Core, experience with RESTful APIs, and familiarity with cloud platforms such as Azure or AWS. Knowledge of modern frontend frameworks (React, Angular, or Vue.js) is a plus. You'll be working on cutting-edge projects in a collaborative, agile environment.", null, "Software Engineer" },
                    { new Guid("00000000-0000-0000-0000-000000000002"), new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Join our data science team! We're looking for a Data Scientist with 2+ years of experience in machine learning and statistical analysis. The ideal candidate should be proficient in Python, R, or Julia, and have hands-on experience with popular ML libraries such as TensorFlow or PyTorch. Strong skills in data visualization and the ability to communicate complex findings to non-technical stakeholders are essential. Experience with big data technologies like Hadoop or Spark is a plus.", null, "Data Scientist" },
                    { new Guid("00000000-0000-0000-0000-000000000003"), new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "We're seeking a skilled Frontend Developer with expertise in React and TypeScript. The ideal candidate should have a strong understanding of modern web technologies, including HTML5, CSS3, and JavaScript ES6+. Experience with state management libraries (Redux, MobX) and testing frameworks (Jest, React Testing Library) is required. You'll be responsible for creating responsive, accessible, and performant user interfaces for our web applications. Knowledge of UX/UI principles and experience with design tools like Figma is a plus.", null, "Frontend Developer" },
                    { new Guid("00000000-0000-0000-0000-000000000004"), new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "We're looking for a DevOps Engineer familiar with AWS and Kubernetes to join our team. The ideal candidate should have strong experience with infrastructure as code (e.g., Terraform, CloudFormation), CI/CD pipelines, and containerization technologies. Proficiency in scripting languages such as Python or Bash is required. You'll be responsible for maintaining and improving our cloud infrastructure, automating deployment processes, and ensuring high availability and scalability of our services. Experience with monitoring tools (e.g., Prometheus, Grafana) and log management solutions is highly desirable.", null, "DevOps Engineer" },
                    { new Guid("00000000-0000-0000-0000-000000000005"), new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "We're hiring a UX Designer with 2+ years of experience in creating user-centered designs for web and mobile applications. The ideal candidate should have a strong portfolio demonstrating their ability to conduct user research, create wireframes, prototypes, and high-fidelity mockups. Proficiency in design tools such as Figma, Sketch, or Adobe XD is required. Experience with design systems, accessibility standards, and conducting usability testing is highly valued. You'll work closely with product managers, developers, and stakeholders to create intuitive and visually appealing user experiences.", null, "UX Designer" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "JobPosts");
        }
    }
}
