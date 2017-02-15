
export class TechCategory{
    constructor(public name : string, public pluralName : string = null) {
        if(pluralName == null)
            this.pluralName = this.name+"s";
    }
}

export class Technology{
    constructor(public category : TechCategory, public name : string){}
}

export class TechCategories {
    public static ProgrammingLanguage = new TechCategory("Programming Language");
    public static Framework = new TechCategory("Framework");
    public static Database = new TechCategory("Database");
    public static ORM = new TechCategory("Object-Relational Mapping");
    public static Microcontroller = new TechCategory("Microcontroller");
    public static ParserGenerator = new TechCategory("Parser Generator");
    public static Lexer = new TechCategory("Lexer");
    public static Library = new TechCategory("Library", "Libraries");
    public static Tool = new TechCategory("Tool");
    public static HWDescriptionLanguage = new TechCategory("HW. Description Language");
    public static categories = [
        TechCategories.ProgrammingLanguage,
        TechCategories.Framework,
        TechCategories.Database,
        TechCategories.ORM,
        TechCategories.Microcontroller,
        TechCategories.ParserGenerator,
        TechCategories.Lexer,
        TechCategories.Library,
        TechCategories.Tool,
        TechCategories.HWDescriptionLanguage,
    ];
}

export default class Technologies {
    public static CSharp = new Technology(TechCategories.ProgrammingLanguage, "C#");
    public static C = new Technology(TechCategories.ProgrammingLanguage, "C");
    public static CPP = new Technology(TechCategories.ProgrammingLanguage, "C++");
    public static Typescript = new Technology(TechCategories.ProgrammingLanguage, "Typescript");
    public static Javascript = new Technology(TechCategories.ProgrammingLanguage, "Javascript");
    public static FSharp = new Technology(TechCategories.ProgrammingLanguage, "F#");
    public static Scala = new Technology(TechCategories.ProgrammingLanguage, "Scala");
    public static Java = new Technology(TechCategories.ProgrammingLanguage, "Java");
    public static PHP = new Technology(TechCategories.ProgrammingLanguage, "PHP");

    public static WPF = new Technology(TechCategories.Framework, "WPF");
    public static OpenCL = new Technology(TechCategories.Framework, "OpenCL");
    public static Aurelia = new Technology(TechCategories.Framework, "Aurelia");
    public static Laravel = new Technology(TechCategories.Framework, "Laravel");
    public static ASPNETMVC = new Technology(TechCategories.Framework, "ASP.NET MVC");
    public static PlayFramework = new Technology(TechCategories.Framework, "Play Framework");

    public static MSSQL = new Technology(TechCategories.Database, "Microsoft SQL Server");
    public static MySQL = new Technology(TechCategories.Database, "MySQL");
    public static PostgreSQL = new Technology(TechCategories.Database, "PostgreSQL");
    public static SQLite = new Technology(TechCategories.Database, "SQLite");

    public static NHibernate = new Technology(TechCategories.ORM, "NHibernate");
    public static EntityFramework = new Technology(TechCategories.ORM, "Entity Framework");

    public static LPC2378 = new Technology(TechCategories.Microcontroller, "LPC2378");
    public static STM32F103 = new Technology(TechCategories.Microcontroller, "STM32F103");
    public static STM32 = new Technology(TechCategories.Microcontroller, "STM32");
    public static MSP430 = new Technology(TechCategories.Microcontroller, "MSP430");

    public static FsYacc = new Technology(TechCategories.ParserGenerator, "FsYacc");

    public static FsLex = new Technology(TechCategories.Lexer, "FsLex");

    public static NAudio = new Technology(TechCategories.Library, "NAudio");
    public static MediaInfo = new Technology(TechCategories.Library, "MediaInfo");

    public static Moq = new Technology(TechCategories.Tool, "Moq");
    public static NUnit = new Technology(TechCategories.Tool, "NUnit");
    public static Xamarin = new Technology(TechCategories.Tool, "Xamarin");

    public static VHDL = new Technology(TechCategories.HWDescriptionLanguage, "VHDL");

    public static technologies = [
        Technologies.CSharp,
        Technologies.C,
        Technologies.CPP,
        Technologies.Typescript,
        Technologies.Javascript,
        Technologies.FSharp,
        Technologies.Scala,
        Technologies.Java,

        Technologies.WPF,
        Technologies.OpenCL,
        Technologies.Aurelia,
        Technologies.ASPNETMVC,
        Technologies.PlayFramework,

        Technologies.MSSQL,
        Technologies.MySQL,
        Technologies.PostgreSQL,
        Technologies.SQLite,

        Technologies.NHibernate,
        Technologies.EntityFramework,

        Technologies.LPC2378,
        Technologies.STM32F103,
        Technologies.STM32,
        Technologies.MSP430,

        Technologies.FsYacc,

        Technologies.FsLex,

        Technologies.Moq,
        Technologies.NUnit,
        Technologies.Xamarin,

        Technologies.VHDL,

    ];

}
