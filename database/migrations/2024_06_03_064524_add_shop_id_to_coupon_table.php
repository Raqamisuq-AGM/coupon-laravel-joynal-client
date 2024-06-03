<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('coupons', function (Blueprint $table) {
            $table->string('short_description')->nullable()->after('description');
            $table->string('image')->nullable()->after('description');
            $table->foreignIdFor(\App\Models\Shop::class, 'shop_id')->nullable()->after('status')->constrained()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('coupons', function (Blueprint $table) {
            $table->dropConstrainedForeignIdFor(\App\Models\Shop::class, 'shop_id');
            $table->dropColumn(['short_description', 'image']);
        });
    }
};
