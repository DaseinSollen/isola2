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
        Schema::create('accesses', function (Blueprint $table) {
            $table->id();

            $table  ->foreignId('user_id')                      // Id Utente
                    ->nullable()
                    ->constrained()
                    ->cascadeOnUpdate()
                    ->cascadeOnDelete();

            $table  ->foreignId('module_id')                    // Id modulo
                    ->nullable()
                    ->constrained('business_modules')
                    ->cascadeOnUpdate()
                    ->cascadeOnDelete();

            $table->string('car_plate');                        // Targa accesso
            $table->string('qr_code')->nullable();              // Codice QR
            $table->string('tax_code')->nullable();             // Codice fiscale

            $table->date('date');                               // Data
            $table->time('entry_time');                         // Ora ingresso
            $table->time('exit_time');                          // Ora uscita
            $table->float('income_waste');                      // Rifiuti a reddito
            $table->float('waste_at_cost');                     // Rifiuti a costo
            $table->boolean('anomaly');                         // Congruità / anomalia
            $table->longText('note');                           // Note

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
        Schema::table('accesses',function (Blueprint $table){
            $table->dropConstrainedForeignId('user_id');
            $table->dropConstrainedForeignId('module_id');
        });
        Schema::dropIfExists('accesses');
    }
};
