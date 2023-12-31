USE [Escuela]
GO
/****** Object:  Table [dbo].[Alumnos]    Script Date: 11/07/2023 09:53:55 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Alumnos](
	[idAlumno] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [nvarchar](50) NULL,
	[apellido] [nvarchar](50) NULL,
	[calificacion] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[idAlumno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Alumnos] ON 

INSERT [dbo].[Alumnos] ([idAlumno], [nombre], [apellido], [calificacion]) VALUES (1, N'oscar', N'lopez', N'10')
INSERT [dbo].[Alumnos] ([idAlumno], [nombre], [apellido], [calificacion]) VALUES (3, N'nameless', N'cat', N'8')
SET IDENTITY_INSERT [dbo].[Alumnos] OFF
GO
