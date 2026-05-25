CREATE TABLE `ProductionOrders` (
  `id` VARCHAR(191) NOT NULL,
  `target_label` VARCHAR(255) NOT NULL,
  `boxes_target` INTEGER NOT NULL,
  `potato_quality` ENUM('PAPA_GRUESA', 'PAPA_SEGUNDA') NOT NULL,
  `potato_weight_kg` DECIMAL(12, 2) NOT NULL,
  `cardboard_boxes` INTEGER NOT NULL,
  `labels` INTEGER NOT NULL,
  `status` ENUM('PENDING', 'IN_PROGRESS', 'COMPLETED') NOT NULL DEFAULT 'PENDING',
  `notes` VARCHAR(500) NULL,
  `completedAt` DATETIME(3) NULL,
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` DATETIME(3) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE INDEX `ProductionOrders_status_idx` ON `ProductionOrders`(`status`);
CREATE INDEX `ProductionOrders_createdAt_idx` ON `ProductionOrders`(`createdAt`);
CREATE INDEX `ProductionOrders_potato_quality_idx` ON `ProductionOrders`(`potato_quality`);
