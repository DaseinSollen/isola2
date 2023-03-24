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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->foreignId('current_team_id')->nullable();
            $table->string('profile_photo_path', 2048)->nullable();
            $table->timestamps();

            // For Both
            $table->boolean('approved')->default(false);          // Stato approvazione ( comune )
            $table->boolean('private')->nullable();                     // Privato o azienda
            $table->string('address')->nullable();                      // Indirizzo
            $table->string('house_number')->nullable();                 // Numero civico
            $table->string('zip_code')->nullable();                     // CAP
            $table->string('phone')->nullable();                        // Recapito telefonico
            $table->boolean('privacy_confirm')->default(false);   // Conferma privacy
            $table->boolean('contract_confirm')->default(false);  // Conferma contratto
            $table->ipAddress()->nullable();                                    // Indirizzo ip
            $table->longText('note')->nullable();                       // Note operatore

            // For Private
            $table->string('name')->nullable();                 // Nome
            $table->string('surname')->nullable();              // Cognome
            $table->string('document_type')->nullable();        // Tipo di documento
            $table->string('document_number')->nullable();      // Numero di documento
            $table->string('tax_code')->nullable();             // Codice Fiscale

            // For business
            $table->string('company_name')->nullable();         // Ragione sociale
            $table->string('VAT_number')->nullable();           // Partita iva
            $table->string('contact_name')->nullable();         // Nome referente
            $table->string('contact_surname')->nullable();      // Cognome referente
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
