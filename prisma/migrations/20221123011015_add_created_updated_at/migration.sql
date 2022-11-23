-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Url" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "url" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Url" ("clicks", "id", "slug", "url") SELECT "clicks", "id", "slug", "url" FROM "Url";
DROP TABLE "Url";
ALTER TABLE "new_Url" RENAME TO "Url";
CREATE UNIQUE INDEX "Url_url_key" ON "Url"("url");
CREATE UNIQUE INDEX "Url_slug_key" ON "Url"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
