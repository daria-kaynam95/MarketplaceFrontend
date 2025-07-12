var builder = WebApplication.CreateBuilder(args);

// ��������� EmailService � ������ �����������
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy
            .WithOrigins("http://localhost:3000", "https://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod());
});

var app = builder.Build();

// Swagger ������ � ������ ����������
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// ������� ������ Middleware
app.UseCors("AllowReactApp");       
app.UseHttpsRedirection();           
app.UseAuthorization();              
app.MapControllers();                
app.Run();                           

