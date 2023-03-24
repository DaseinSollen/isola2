<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('car_plates', function (Blueprint $table) {
            $table->id();
            $table->string('car_plate')->unique();                // Targa
            $table->string('length');                             // Lunghezza mezzo
            $table->boolean('blacklist')->default(false);   // Blacklist

            $table  ->foreignId('user_id')
                    ->constrained('users')
                    ->cascadeOnUpdate()
                    ->cascadeOnDelete();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::table('car_plates',function (Blueprint $table){
            $table->dropConstrainedForeignId('user_id');
        });
        Schema::dropIfExists('car_plates');
    }
};
