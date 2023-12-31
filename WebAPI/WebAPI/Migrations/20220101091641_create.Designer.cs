﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebAPI.Data;

namespace WebAPI.Migrations
{
    [DbContext(typeof(ClinicDbContext))]
    [Migration("20220101091641_create")]
    partial class create
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.12")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebAPI.Models.Admin", b =>
                {
                    b.Property<int>("AdminId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AdminName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FullName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserType")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("AdminId");

                    b.ToTable("Admin");
                });

            modelBuilder.Entity("WebAPI.Models.BacSi", b =>
                {
                    b.Property<int>("MaBS")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("HinhAnh")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MaCK")
                        .HasColumnType("int");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SDT")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TenBS")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserType")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("MaBS");

                    b.HasIndex("Email")
                        .IsUnique()
                        .HasFilter("[Email] IS NOT NULL");

                    b.HasIndex("MaCK");

                    b.ToTable("BacSi");
                });

            modelBuilder.Entity("WebAPI.Models.BenhNhan", b =>
                {
                    b.Property<int>("MaBN")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DiaChi")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("GioiTinh")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HinhAnh")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("NgaySinh")
                        .HasColumnType("datetime2");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SDT")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("TenBN")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserType")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("MaBN");

                    b.HasIndex("SDT")
                        .IsUnique()
                        .HasFilter("[SDT] IS NOT NULL");

                    b.ToTable("BenhNhan");
                });

            modelBuilder.Entity("WebAPI.Models.ChuyenKhoa", b =>
                {
                    b.Property<int>("MaCK")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("TenCK")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("MaCK");

                    b.ToTable("ChuyenKhoa");
                });

            modelBuilder.Entity("WebAPI.Models.Department", b =>
                {
                    b.Property<int>("DepartmentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DepartmentName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("DepartmentId");

                    b.ToTable("Department");
                });

            modelBuilder.Entity("WebAPI.Models.Employee", b =>
                {
                    b.Property<int>("EmployeeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DateOfJoining")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Department")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EmployeeName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhotoFileName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("EmployeeId");

                    b.ToTable("Employee");
                });

            modelBuilder.Entity("WebAPI.Models.HoaDon", b =>
                {
                    b.Property<int>("MaHD")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("NgayLap")
                        .HasColumnType("datetime2");

                    b.Property<decimal>("TongTien")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("MaHD");

                    b.ToTable("HoaDon");
                });

            modelBuilder.Entity("WebAPI.Models.LichKham", b =>
                {
                    b.Property<int>("MaLK")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("GhiChu")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MaBN")
                        .HasColumnType("int");

                    b.Property<int>("MaBS")
                        .HasColumnType("int");

                    b.Property<DateTime>("NgayKham")
                        .HasColumnType("datetime2");

                    b.Property<string>("PhongKham")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TrangThai")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("MaLK");

                    b.HasIndex("MaBN");

                    b.HasIndex("MaBS");

                    b.ToTable("LichKham");
                });

            modelBuilder.Entity("WebAPI.Models.PhieuKhamBenh", b =>
                {
                    b.Property<int>("MaPK")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ChuanDoan")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MaBN")
                        .HasColumnType("int");

                    b.Property<int>("MaBS")
                        .HasColumnType("int");

                    b.Property<int>("MaHD")
                        .HasColumnType("int");

                    b.Property<DateTime>("NgayKham")
                        .HasColumnType("datetime2");

                    b.Property<string>("TrieuChung")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("MaPK");

                    b.HasIndex("MaBN");

                    b.HasIndex("MaBS");

                    b.HasIndex("MaHD")
                        .IsUnique();

                    b.ToTable("PhieuKhamBenh");
                });

            modelBuilder.Entity("WebAPI.Models.BacSi", b =>
                {
                    b.HasOne("WebAPI.Models.ChuyenKhoa", "ChuyenKhoa")
                        .WithMany("BacSis")
                        .HasForeignKey("MaCK")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ChuyenKhoa");
                });

            modelBuilder.Entity("WebAPI.Models.LichKham", b =>
                {
                    b.HasOne("WebAPI.Models.BenhNhan", "BenhNhan")
                        .WithMany("LichKhams")
                        .HasForeignKey("MaBN")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WebAPI.Models.BacSi", "BacSi")
                        .WithMany("LichKhams")
                        .HasForeignKey("MaBS")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("BacSi");

                    b.Navigation("BenhNhan");
                });

            modelBuilder.Entity("WebAPI.Models.PhieuKhamBenh", b =>
                {
                    b.HasOne("WebAPI.Models.BenhNhan", "BenhNhan")
                        .WithMany("PhieuKhamBenhs")
                        .HasForeignKey("MaBN")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WebAPI.Models.BacSi", "BacSi")
                        .WithMany("PhieuKhamBenhs")
                        .HasForeignKey("MaBS")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WebAPI.Models.HoaDon", "HoaDon")
                        .WithOne("PhieuKhamBenh")
                        .HasForeignKey("WebAPI.Models.PhieuKhamBenh", "MaHD")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("BacSi");

                    b.Navigation("BenhNhan");

                    b.Navigation("HoaDon");
                });

            modelBuilder.Entity("WebAPI.Models.BacSi", b =>
                {
                    b.Navigation("LichKhams");

                    b.Navigation("PhieuKhamBenhs");
                });

            modelBuilder.Entity("WebAPI.Models.BenhNhan", b =>
                {
                    b.Navigation("LichKhams");

                    b.Navigation("PhieuKhamBenhs");
                });

            modelBuilder.Entity("WebAPI.Models.ChuyenKhoa", b =>
                {
                    b.Navigation("BacSis");
                });

            modelBuilder.Entity("WebAPI.Models.HoaDon", b =>
                {
                    b.Navigation("PhieuKhamBenh");
                });
#pragma warning restore 612, 618
        }
    }
}
