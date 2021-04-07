using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace aaronApplicationPlatform.Data
{
    public partial class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options)
            : base(options)
        {
        }

        #region Generated Properties
        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Address> Addresses { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.AddressShop> AddressShops { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Cashpoint> Cashpoints { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Country> Countries { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Filespec> Filespecs { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Filetype> Filetypes { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Group> Groups { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.GroupShop> GroupShops { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Inventory> Inventories { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Language> Languages { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Menu> Menus { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Payment> Payments { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Person> People { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.ProductFilespec> ProductFilespecs { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Product> Products { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.ProductShop> ProductShops { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.ReceiptItem> ReceiptItems { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Receipt> Receipts { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Receiptstatus> Receiptstatuses { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Rolegroup> Rolegroups { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.RoleRule> RoleRules { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Role> Roles { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Rulegroup> Rulegroups { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Rule> Rules { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Shop> Shops { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.SupplierInventory> SupplierInventories { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Supplier> Suppliers { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Unit> Units { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.UserRole> UserRoles { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.UserRule> UserRules { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.UserRuleView> UserRuleViews { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.User> Users { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.UserShop> UserShops { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Vat> Vats { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.VatShop> VatShops { get; set; }

        #endregion

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            #region Generated Configuration
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.AddressMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.AddressShopMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.CashpointMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.CountryMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.FilespecMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.FiletypeMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.GroupMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.GroupShopMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.InventoryMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.LanguageMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.MenuMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.PaymentMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.PersonMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.ProductFilespecMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.ProductMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.ProductShopMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.ReceiptItemMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.ReceiptMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.ReceiptstatusMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.RolegroupMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.RoleMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.RoleRuleMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.RulegroupMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.RuleMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.ShopMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.SupplierInventoryMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.SupplierMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.UnitMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.UserMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.UserRoleMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.UserRuleMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.UserRuleViewMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.UserShopMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.VatMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.VatShopMap());
            #endregion
        }
    }
}
