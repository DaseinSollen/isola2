<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Device extends Model
{
    use HasFactory,HasApiTokens;

    protected $fillable = ['uuid','name','ip_address','serial','auth_key','status','type'];

    protected $hidden = ['auth_key'];

    public function getRouteKeyName(): string
    {
        return 'uuid';
    }
}
