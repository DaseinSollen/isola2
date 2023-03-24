<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CarPlate extends Model
{
    use HasFactory;

    protected $fillable = [
        'car_plate','user_id','blacklist','length'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
