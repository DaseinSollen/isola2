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
    public function up()
    {
        Schema::create('business_modules', function (Blueprint $table) {
            $table->id();

            $table  ->foreignId('business_id')              // Id azienda
                    ->constrained('users')
                    ->cascadeOnUpdate()
                    ->cascadeOnDelete();

            $table->string('VAT_number');                   // Partita IVa
            $table->string('driver_full_name');             // Nome e Cognome autista
            $table->string('car_plate');                    // Targa
            $table->string('length');                       // Lunghezza mezzo
            $table->date('date');                           // Data
            $table->boolean('confirmed');                   // Confermato

            $table  ->foreignId('qr_code')                  // QR code
                    ->constrained()
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
    public function down()
    {
        Schema::table('business_modules', function (Blueprint $table){
            $table->dropConstrainedForeignId('qr_code');
        });
        Schema::dropIfExists('business_modules');
    }
};
