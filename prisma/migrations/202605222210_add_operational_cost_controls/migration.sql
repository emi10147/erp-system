CREATE TABLE `UtilityExpense` (
  `id` VARCHAR(191) NOT NULL,
  `type` ENUM('GAS', 'ELECTRICITY') NOT NULL,
  `measurement_unit` ENUM('GAS_KG', 'GAS_TANK', 'GAS_CORPORATE_LITER', 'ELECTRICITY_KWH', 'USD') NOT NULL,
  `consumption` DECIMAL(12, 2) NULL,
  `amount` DECIMAL(12, 2) NOT NULL,
  `expense_date` DATE NOT NULL,
  `notes` VARCHAR(500) NULL,
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` DATETIME(3) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `MonthlyBudget` (
  `id` VARCHAR(191) NOT NULL,
  `year` INTEGER NOT NULL,
  `month` INTEGER NOT NULL,
  `category` ENUM('RAW_MATERIALS', 'INSUMOS', 'UTILITIES') NOT NULL,
  `allocated_amount` DECIMAL(12, 2) NOT NULL,
  `notes` VARCHAR(500) NULL,
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` DATETIME(3) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `ProductionConsumption` (
  `id` VARCHAR(191) NOT NULL,
  `batch_id` VARCHAR(191) NULL,
  `product_id` VARCHAR(191) NOT NULL,
  `quantity` DECIMAL(12, 2) NOT NULL,
  `unit_cost` DECIMAL(12, 4) NOT NULL,
  `total_cost` DECIMAL(12, 2) NOT NULL,
  `cost_category` ENUM('RAW_MATERIALS', 'INSUMOS') NOT NULL,
  `consumedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` DATETIME(3) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE INDEX `UtilityExpense_type_idx` ON `UtilityExpense`(`type`);
CREATE INDEX `UtilityExpense_expense_date_idx` ON `UtilityExpense`(`expense_date`);
CREATE UNIQUE INDEX `MonthlyBudget_year_month_category_key` ON `MonthlyBudget`(`year`, `month`, `category`);
CREATE INDEX `MonthlyBudget_year_month_idx` ON `MonthlyBudget`(`year`, `month`);
CREATE INDEX `ProductionConsumption_batch_id_idx` ON `ProductionConsumption`(`batch_id`);
CREATE INDEX `ProductionConsumption_product_id_idx` ON `ProductionConsumption`(`product_id`);
CREATE INDEX `ProductionConsumption_cost_category_idx` ON `ProductionConsumption`(`cost_category`);
CREATE INDEX `ProductionConsumption_consumedAt_idx` ON `ProductionConsumption`(`consumedAt`);

ALTER TABLE `ProductionConsumption`
  ADD CONSTRAINT `ProductionConsumption_batch_id_fkey`
  FOREIGN KEY (`batch_id`) REFERENCES `ProductionBatch`(`id`)
  ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE `ProductionConsumption`
  ADD CONSTRAINT `ProductionConsumption_product_id_fkey`
  FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`)
  ON DELETE CASCADE ON UPDATE CASCADE;
