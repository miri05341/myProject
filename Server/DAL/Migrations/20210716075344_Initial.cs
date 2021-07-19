using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DAL.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "persons",
                columns: table => new
                {
                    personId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    firstName = table.Column<string>(type: "nvarchar(20)", nullable: false),
                    lastName = table.Column<string>(type: "nvarchar(20)", nullable: false),
                    ID = table.Column<string>(type: "nvarchar(12)", nullable: false),
                    birthdate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    kind = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    helth = table.Column<string>(type: "nvarchar(10)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_persons", x => x.personId);
                });

            migrationBuilder.CreateTable(
                name: "children",
                columns: table => new
                {
                    childId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(20)", nullable: false),
                    birthdate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ID = table.Column<string>(type: "nvarchar(12)", nullable: true),
                    personId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_children", x => x.childId);
                    table.ForeignKey(
                        name: "FK_children_persons_personId",
                        column: x => x.personId,
                        principalTable: "persons",
                        principalColumn: "personId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_children_personId",
                table: "children",
                column: "personId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "children");

            migrationBuilder.DropTable(
                name: "persons");
        }
    }
}
